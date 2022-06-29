import HelmetComponent from "next/head";
import React from "react";
import { useTrans } from "../../hooks/useTrans";
import Script from "next/script";
import Head from "next/head";

export const Helmet = ({
  title,
  customTitle,
  description,
  customDescription,
  image,
}) => {
  const { trans } = useTrans();
  const tabTitle = `${customTitle ? customTitle : trans(title)} | ${trans(
    "project-title"
  )}`;
  const descr = `${customDescription
    ? customDescription
    : trans(description ? description : "default-description")
    }`;
  const imageSrc = image ? image : null;
  return (
    <HelmetComponent>
      <title>{tabTitle}</title>
      <meta itemProp="name" content={tabTitle} />
      <meta property="og:title" content={tabTitle} />
      <meta name="twitter:title" content={tabTitle} />

      <meta name="description" content={descr} />
      <meta itemProp="description" content={descr} />
      <meta property="og:description" content={descr} />
      <meta name="twitter:description" content={descr} />

      <meta itemProp="image" content={imageSrc} />
      <meta property="og:image" content={imageSrc} />
      <meta name="twitter:image" content={imageSrc} />
      <meta name="twitter:card" content={imageSrc} />
      <meta
        keywords={[
          trans("volunteers"),
          trans("charity-foundation"),
          trans("help-unrainians"),
          trans("humanitarian-aid"),
          trans("refugees"),
          trans("donations"),
        ].join(", ")}
      />
    </HelmetComponent>
  );
};
