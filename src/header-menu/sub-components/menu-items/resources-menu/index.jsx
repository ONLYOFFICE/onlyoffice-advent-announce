/*
* (c) Copyright Ascensio System SIA 2024
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import React from "react";
import Link from "next/link";
import MenuItem from "../../menu-item/index.jsx";

const ResourcesMenu = ({ currentLocale, t, hrefLang, navHidden, setNavHidden }) => {
  const blogHrefLang = `https://www.onlyoffice.com/blog${{ "en": "", "ru": "", "zh": "/zh-hans", "pt": "/pt-br"}[currentLocale] ?? `/${currentLocale}`}`;

  return (
    <MenuItem className="oo-hm-item--resources" heading={t("Resources")} navHidden={navHidden} setNavHidden={setNavHidden}>
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box oo-hm-item-box--with-border">
          <div className="oo-hm-item-label">{t("About us")}</div>
          <Link className="oo-hm-item-link oo-hm-item-link--company" href={`${hrefLang}/about.aspx`}>{t("Company")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--customers" href={`${hrefLang}/customers.aspx`}>{t("Customers")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--success-stories" href={`${hrefLang}/customers.aspx#stories`}>{t("Success stories")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--awards" href={`${hrefLang}/awards.aspx`}>{t("Awards")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--certificates" href={`${hrefLang}/certificates.aspx`}>{t("Certificates")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--events" href={`${hrefLang}/events.aspx`}>{t("Events")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--press-downloads" href={`${hrefLang}/press-downloads.aspx`}>{t("Press downloads")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--gift-shop" href="https://shop.spreadshirt.com/onlyoffice">{t("Gift shop")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--contacts" href={`${hrefLang}/contacts.aspx`}>{t("Contacts")}</Link>
        </div>
        <div className="oo-hm-item-box">
          <div className="oo-hm-item-box-wrapper">
            <div className="oo-hm-item-label">{t("Collaborate")}</div>
            <Link className="oo-hm-item-link oo-hm-item-link--for-contributers" href={`${hrefLang}/contribute.aspx`}>{t("For contributers")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--for-translators" href="https://helpcenter.onlyoffice.com/guides/become-translator.aspx">{t("For translators")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--for-influencers" href={`${hrefLang}/influencer-program.aspx`}>{t("For influencers")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--vacancies" href={`${hrefLang}/vacancies.aspx`}>{t("Vacancies")}</Link>
          </div>
          <div className="oo-hm-item-box-wrapper">
            <div className="oo-hm-item-label">{t("Get help")}</div>
            <Link className="oo-hm-item-link oo-hm-item-link--forum" href="https://forum.onlyoffice.com/">{t("Forum")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--help-center" href="https://helpcenter.onlyoffice.com/index.aspx">{t("Help Center")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--training-courses" href={`${hrefLang}/training-courses.aspx`}>{t("Training courses")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--webinars" href={`${hrefLang}/webinars.aspx`}>{t("Webinars")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--white-papers" href={`${hrefLang}/whitepapers.aspx`}>{t("White papers")}</Link>
          </div>
        </div>
        <div className="oo-hm-item-box oo-hm-item-box--bg-gray">
          <Link className="oo-hm-item-link oo-hm-item-link--blog" href={blogHrefLang}>{t("Blog")}</Link>
          <Link className="oo-hm-item-block" href={t("blogLink1")}>
            <div className="oo-hm-item-block-img oo-hm-item-block-img--blog-1"></div>
            <div className="oo-hm-item-blog-title">{t("ONLYOFFICE Docs 8.2 released: PDF collaborative editing, revamped interface, optimized performance, and more")}</div>
            <div className="oo-hm-item-blog-date">{t("17 October 2024")}</div>
          </Link>
          {(currentLocale === "zh" || currentLocale === "zh-hans") ? (
            <>
              <Link className="oo-hm-item-link oo-hm-item-link--zh-dev" href="https://onlyoffice.com/zh/plugin-developer-competiton.aspx">比赛</Link>
              <Link className="oo-hm-item-block" href="https://onlyoffice.com/zh/plugin-developer-competiton.aspx">
                <div className="oo-hm-item-block-img oo-hm-item-block-img--zh-dev-img"></div>
                <div className="oo-hm-item-blog-title">2024 插件开发大赛：为 ONLYOFFICE 开发插件，赢取万元奖金！</div>
              </Link>
            </>
          ) : (
            <Link className="oo-hm-item-block" href={t("blogLink2")}>
              <div className="oo-hm-item-block-img oo-hm-item-block-img--blog-2"></div>
              <div className="oo-hm-item-blog-title">{t("Collaborate on documents within Zoom meetings: ONLYOFFICE DocSpace app for Zoom available")}</div>
              <div className="oo-hm-item-blog-date">{t("27 February 2024")}</div>
            </Link>
          )}
        </div>
      </div>
    </MenuItem>
  );
};

export default ResourcesMenu;