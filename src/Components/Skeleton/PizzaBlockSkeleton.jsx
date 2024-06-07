import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={320}
        height={480}
        viewBox="0 0 300 486"
        backgroundColor="#d4d4d4"
        foregroundColor="#FFFFFF"
        {...props}
    >
        <rect x="0" y="290" rx="0" ry="0" width="280" height="24" />
        <rect x="0" y="323" rx="0" ry="0" width="280" height="85" />
        <rect x="0" y="420" rx="0" ry="0" width="89 " height="45" />

        <rect x="128" y="420" rx="0" ry="0" width="152" height="45" />
        <circle cx="140" cy="140" r="140" />
    </ContentLoader>
);

export default PizzaBlockSkeleton;
