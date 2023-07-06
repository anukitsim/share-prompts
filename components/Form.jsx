"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit, ...passedProps }) => {
  const textareaRef = useRef(null);
  const placeholderText = "Enter your prompt here...";

  useEffect(() => {
    if (type !== "Edit") {
      const typewriter = {
        currentText: "",
        currentIndex: 0,
        delay: 75,
        intervalId: null,
        startTyping: function () {
          this.intervalId = setInterval(() => {
            if (this.currentIndex <= placeholderText.length) {
              this.currentText = placeholderText.substring(0, this.currentIndex);
              this.currentIndex++;
            } else {
              clearInterval(this.intervalId);
            }
            textareaRef.current.placeholder = this.currentText;
          }, this.delay);
        },
      };

      typewriter.startTyping();

      return () => {
        clearInterval(typewriter.intervalId);
      };
    }
  }, [type]);

  

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} post</span>
      </h1>
      <p className="mt-5 text-lg font-notoSansJP text-[#86A3B8] sm:text-xl text-left max-w-md">
        {type} and share creative prompts with the world
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-notoSansJP font-semibold text-base text-[#86A3B8]">Your AI prompt</span>
          <textarea
            ref={textareaRef}
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder=""
            {...passedProps}
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-notoSansJP font-semibold text-base text-[#86A3B8]">
            Tag {` `}
            <span className="font-normal">(#...)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm hover:scale-110">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-gray-500 text-sm hover:scale-110"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
