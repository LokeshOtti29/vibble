import React from "react";

const Card = ({
  avatarUrl,
  name = "John Doe",
  username = "johndoe",
  time = "now",
  text = "Hello world 👋",
  imageUrl,
}) => {
  return (
    <article className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-slate-200" />
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="truncate font-semibold text-slate-900">
              {name}
            </span>
            <span className="truncate text-slate-500">@{username}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{time}</span>
          </div>
        </div>
        <button className="ml-auto rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-50">
          •••
        </button>
      </div>

      <p className="mb-3 whitespace-pre-wrap text-[15px] leading-relaxed text-slate-800">
        {text}
      </p>

      {imageUrl && (
        <div className="mb-3 overflow-hidden rounded-xl border border-slate-200">
          <img
            src={imageUrl}
            alt="post"
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <button className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-slate-50">
          Like
        </button>
        <button className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-slate-50">
          Comment
        </button>
        <button className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-slate-50">
          Share
        </button>
        <button className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-slate-50">
          Save
        </button>
      </div>
    </article>
  );
};

export default Card;
