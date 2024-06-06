import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSceleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#d4d4d4"
        foregroundColor="#d4d4d4"
        {...props}
    >
        <rect x="55" y="280" rx="0" ry="0" width="161" height="23" />
        <rect x="58" y="313" rx="0" ry="0" width="156" height="53" />
        <rect x="57" y="385" rx="0" ry="0" width="67" height="22" />
        <rect x="280" y="238" rx="0" ry="0" width="65" height="22" />
        <rect x="252" y="92" rx="0" ry="0" width="5" height="0" />
        <rect x="150" y="383" rx="0" ry="0" width="62" height="23" />
        <circle cx="140" cy="140" r="130" />
    </ContentLoader>
);

export default PizzaBlockSceleton;
