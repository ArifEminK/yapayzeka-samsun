"use client";
import dynamic from "next/dynamic";
import React from "react";

const AiNewsList = dynamic(() => import('@/app/components/News/AiNewsList'), {
    ssr: false,
});

export default function ClientNewsWrapper({ locale }: { locale: string }) {
    return <AiNewsList locale={locale} />;
}
