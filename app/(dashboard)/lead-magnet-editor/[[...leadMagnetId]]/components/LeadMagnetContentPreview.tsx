interface LeadMagnetContentPreviewProps {
  title?: string;
  subtitle?: string;
  body?: string;
}

function LeadMagnetContentPreview({
  title,
  subtitle,
  body,
}: LeadMagnetContentPreviewProps) {
  return (
    <div className="mb-10 flex max-h-[85vh] flex-col overflow-y-auto rounded-xl bg-white p-6 shadow-xl md:mb-10 md:p-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <div className="sticky top-0 bg-white pb-4">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-4xl">
          {title || <span className="text-gray-400">Your title here...</span>}
        </h1>
        {subtitle ? (
          <h2 className="text-lg text-gray-500 md:text-2xl">
            {subtitle}
          </h2>
        ) : (
          <p className="text-gray-400">Add a subtitle...</p>
        )}
      </div>

      <div
        className="mt-6 prose max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: body || "<p class='text-gray-400'>Start writing your content...</p>",
        }}
      />
    </div>
  );
}

export default LeadMagnetContentPreview;
