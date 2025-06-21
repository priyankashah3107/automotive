import React from "react";

const InquiryFormLoading = () => {
  return (
    <div className="bg-[#f5f6fa] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow">
        {/* Header */}
        <div className="mb-8">
          <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Form fields */}
        <div className="space-y-6">
          {/* Name row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Contact row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Message box */}
          <div className="space-y-2">
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
            <div className="h-32 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Submit button */}
          <div className="pt-4 text-center">
            <div className="h-10 w-32 mx-auto bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryFormLoading;
