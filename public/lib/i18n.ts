import type { SSRConfig, UserConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";

export const getServerTranslations = async (
  locale: string,
  namespacesRequired?: string[] | undefined,
  configOverride?: UserConfig
): Promise<SSRConfig> => {
  const config = configOverride ?? nextI18nextConfig;
  return serverSideTranslations(locale, namespacesRequired, config);
};
