"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  EnvelopeSimple, 
  Phone, 
  User, 
  ChatText,
  Warning
} from "@phosphor-icons/react/dist/ssr";

// 入力値のサニタイズ関数
const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, '');
};

// レート制限の設定（1分間に3回まで）
const RATE_LIMIT = {
  maxAttempts: 3,
  timeWindow: 60000, // 1分
};

// アニメーションのバリアント
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// エラーメッセージのスタイル
const errorMessageStyle = "text-amber-600 text-sm mt-1 flex items-center";

export default function Home() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_CODE as string
  );
  const [attempts, setAttempts] = useState<number[]>([]);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isConfirmMode, setIsConfirmMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // レート制限のチェック
  const checkRateLimit = () => {
    const now = Date.now();
    const recentAttempts = attempts.filter(time => now - time < RATE_LIMIT.timeWindow);
    
    if (recentAttempts.length >= RATE_LIMIT.maxAttempts) {
      setIsRateLimited(true);
      return false;
    }
    
    setAttempts([...recentAttempts, now]);
    return true;
  };

  // フォーム送信ハンドラー
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // エラーをリセット
    setErrors({});
    
    if (isRateLimited) {
      setErrors({ rateLimit: '送信回数が制限を超えました。しばらく時間をおいてから再度お試しください。' });
      return;
    }
    
    if (!checkRateLimit()) {
      return;
    }
    
    // フォームデータの取得とサニタイズ
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    // サニタイズしたデータをフォームに設定
    const sanitizedData = {
      name: sanitizeInput(formDataObj.get('name') as string),
      tel: sanitizeInput(formDataObj.get('tel') as string),
      email: sanitizeInput(formDataObj.get('email') as string),
      message: sanitizeInput(formDataObj.get('message') as string),
    };
    
    // 確認モードに移行
    setFormData(sanitizedData);
    setIsConfirmMode(true);
  };

  // 最終送信処理
  const handleFinalSubmit = async () => {
    if (isRateLimited) {
      setErrors({ rateLimit: '送信回数が制限を超えました。しばらく時間をおいてから再度お試しください。' });
      return;
    }
    
    if (!checkRateLimit()) {
      return;
    }
    
    try {
      // Formspreeの送信処理
      const formDataObj = new FormData();
      
      // サニタイズされたデータをフォームに追加
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      
      // Honeypotフィールドを追加
      formDataObj.append('_gotcha', '');
      
      // フォームを送信
      await handleSubmit(formDataObj);
    } catch (error) {
      console.error('送信エラー:', error);
      setErrors({ submit: '送信中にエラーが発生しました。もう一度お試しください。' });
    }
  };

  // レート制限のリセット
  useEffect(() => {
    if (isRateLimited) {
      const timer = setTimeout(() => {
        setIsRateLimited(false);
        setAttempts([]);
      }, RATE_LIMIT.timeWindow);
      
      return () => clearTimeout(timer);
    }
  }, [isRateLimited]);

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-16 h-16 color-accent2-bg rounded-full flex items-center justify-center mb-4"
        >
          <CheckCircle size={32} weight="fill" className="color-accent" />
        </motion.div>
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="heading text-xl font-medium color-accent mb-2"
        >
          送信完了
        </motion.h3>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          お問い合わせありがとうございました！
          <br />
          内容を確認次第、ご連絡させていただきます。
        </motion.p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {!isConfirmMode ? (
        <motion.form
          key="form"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          onSubmit={handleFormSubmit}
          method="POST"
          className="mt-6"
        >
          {/* 🛡️ honeypot（スパム対策） */}
          <input type="text" name="_gotcha" className="hidden" />

          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <label className="block mb-2 text-sm color-text">お名前</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} weight="light" className="text-gray-400" />
              </div>
              <input
                name="name"
                type="text"
                className="block w-full pl-10 px-1 py-2 mt-2 color-text-sub placeholder-gray-400 bg-white border border-gray-200 rounded-sm focus:outline-none focus:color-accent-border"
                required
                maxLength={50}
                placeholder="山田 太郎"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex-1 mt-6"
          >
            <label className="block mb-2 text-sm color-text">電話番号</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={18} weight="light" className="text-gray-400" />
              </div>
              <input
                name="tel"
                type="tel"
                pattern="[0-9\-]*"
                className="block w-full pl-10 px-1 py-2 mt-2 color-text-sub placeholder-gray-400 bg-white border border-gray-200 rounded-sm focus:outline-none focus:color-accent-border"
                placeholder="例: 090-1234-5678"
                maxLength={15}
              />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex-1 mt-6"
          >
            <label className="block mb-2 text-sm color-text">
              メールアドレス
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeSimple size={18} weight="light" className="text-gray-400" />
              </div>
              <input
                name="email"
                type="email"
                className="block w-full pl-10 px-1 py-2 mt-2 color-text-sub placeholder-gray-400 bg-white border border-gray-200 rounded-sm focus:outline-none focus:color-accent-border"
                required
                maxLength={100}
                placeholder="example@example.com"
              />
            </div>
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors}
              className={errorMessageStyle}
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-full mt-6"
          >
            <label className="block mb-2 text-sm color-text">
              お問い合わせ内容
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                <ChatText size={18} weight="light" className="text-gray-400" />
              </div>
              <textarea
                name="message"
                className="block w-full pl-10 px-1 py-1 mt-2 color-text-sub placeholder-gray-400 bg-white border border-gray-200 rounded-sm h-48 focus:outline-none focus:color-accent-border"
                placeholder="お問い合わせ内容を入力してください"
                required
                maxLength={1000}
              />
            </div>
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors}
              className={errorMessageStyle}
            />
          </motion.div>

          {errors.rateLimit && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={errorMessageStyle}
            >
              <Warning size={16} weight="fill" className="mr-1" />
              {errors.rateLimit}
            </motion.p>
          )}

          {errors.submit && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={errorMessageStyle}
            >
              <Warning size={16} weight="fill" className="mr-1" />
              {errors.submit}
            </motion.p>
          )}

          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={state.submitting || isRateLimited}
            className={`w-full px-5 py-3 mt-6 text-sm font-medium rounded-sm bg-white border color-accent-border color-accent hover:color-accent-bg hover:text-white transition-colors duration-300 flex items-center justify-center ${
              isRateLimited ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            {isRateLimited ? '1分間に3回まで送信可能です' : '確認画面へ'}
            <ArrowRight size={18} weight="bold" className="ml-2" />
          </motion.button>
                  </motion.form>
      ) : (
        <motion.div
          key="confirm"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <motion.h3 
            variants={itemVariants}
            className="heading text-xl font-medium color-accent mb-6 text-center"
          >
            入力内容の確認
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <User size={20} weight="light" className="color-accent mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">お名前</p>
                  <p className="color-text">{formData.name}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} weight="light" className="color-accent mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">電話番号</p>
                  <p className="color-text">{formData.tel || '未入力'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <EnvelopeSimple size={20} weight="light" className="color-accent mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">メールアドレス</p>
                  <p className="color-text">{formData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ChatText size={20} weight="light" className="color-accent mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">お問い合わせ内容</p>
                  <p className="color-text whitespace-pre-wrap">{formData.message}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex space-x-4 mt-6"
          >
            <button
              type="button"
              onClick={() => setIsConfirmMode(false)}
              className="flex-1 px-5 py-3 text-sm font-medium rounded-sm bg-gray-100 color-text-sub hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <ArrowLeft size={18} weight="bold" className="mr-2" />
              修正する
            </button>
            
            <button
              type="button"
              onClick={handleFinalSubmit}
              disabled={state.submitting || isRateLimited}
              className={`flex-1 px-5 py-3 text-sm font-medium rounded-sm color-accent-bg text-white hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center ${
                isRateLimited ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isRateLimited ? '送信制限中...' : '送信する'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
