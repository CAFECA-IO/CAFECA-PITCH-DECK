'use client';

import { createContext, useContext, useCallback, useSyncExternalStore, ReactNode } from 'react';
import { en } from '@/i18n/en';
import { zhTw } from '@/i18n/zh_tw';
import { zhCn } from '@/i18n/zh_cn';
import { ko } from '@/i18n/ko';
import { ja } from '@/i18n/ja';

export type Language = 'en' | 'zh-TW' | 'zh-CN' | 'ko' | 'ja';
type Dictionary = Record<string, unknown>;

function getNestedValue<T = string>(obj: Record<string, unknown>, path: string): T {
  const value = path.split('.').reduce((prev: unknown, curr: string) => {
    if (prev && typeof prev === 'object' && !Array.isArray(prev)) {
      return (prev as Record<string, unknown>)[curr];
    }
    return undefined;
  }, obj);
  return value !== undefined ? (value as T) : (path as unknown as T);
}

interface II18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: {
    (key: string, options?: Record<string, string | number>): string;
    <T>(key: string, options?: Record<string, string | number>): T;
  };
}

const I18nContext = createContext<II18nContextType | undefined>(undefined);

const dictionaries: Record<Language, Dictionary> = {
  en,
  'zh-TW': zhTw,
  'zh-CN': zhCn,
  ko,
  ja,
};

const LANGUAGE_STORAGE_KEY = 'isunfa_lang';

// Info: (20260714 - Luphia) 以 localStorage 作為語言設定的外部資料來源，供 useSyncExternalStore 訂閱
const languageListeners = new Set<() => void>();

function subscribeLanguage(callback: () => void) {
  languageListeners.add(callback);
  window.addEventListener('storage', callback);
  return () => {
    languageListeners.delete(callback);
    window.removeEventListener('storage', callback);
  };
}

function readStoredLanguage(): Language {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
  return saved && Object.keys(dictionaries).includes(saved) ? saved : 'zh-TW';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Info: (20260714 - Luphia) 從 localStorage 讀取語言，SSR 期間回退為預設 zh-TW 以避免 hydration 不一致
  const language = useSyncExternalStore<Language>(subscribeLanguage, readStoredLanguage, () => 'zh-TW');
  const dictionary = dictionaries[language];

  const setLanguage = useCallback((lang: Language) => {
    // Info: (20260714 - Luphia) 寫入 localStorage 後通知所有訂閱者重新讀取
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    languageListeners.forEach((listener) => listener());
  }, []);

  const t = <T = string>(key: string, options?: Record<string, string | number>): T => {
    const text: unknown = getNestedValue<unknown>(dictionary, key);
    if (options && typeof text === 'string') {
      let stringText = text;
      Object.entries(options).forEach(([k, v]) => {
        stringText = stringText.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      });
      return stringText as T;
    }
    return text as T;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}
