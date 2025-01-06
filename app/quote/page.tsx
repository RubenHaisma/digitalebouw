// app/custom-website-quote/page.tsx

import React from "react";
import UniqueFeature from "@/components/sections/unique-feature";

const CustomWebsiteQuotePage = () => {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center py-8">
        {/* Call to action */}
        <UniqueFeature />  {/* Your interactive pricing feature */}
      </main>
    </div>
  );
};

export default CustomWebsiteQuotePage;
