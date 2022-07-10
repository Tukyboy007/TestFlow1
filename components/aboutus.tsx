import React, { useRef, useContext, useState, useCallback } from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong>
          Our team of expert engineers has craeted the best user expreriences in
          some of the most populer apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-3
         lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20"
        >
          <Member
            id="marc"
            name="Marc"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="catalin"
            name="catalin"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="christoph"
            name="christoph"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="eric"
            name="eric"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="janic"
            name="janic"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="matei"
            name="matie"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="mo"
            name="mo"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="szymon"
            name="szymon"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="thomas"
            name="thomas"
            socialId="@mrousaby"
            link="https://github.com"
          />
          <Member
            id="viktoria"
            name="viktoria"
            socialId="@mrousaby"
            link="https://github.com"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
