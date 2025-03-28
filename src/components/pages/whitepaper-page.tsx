import Link from 'next/link';
import { Button } from '../ui/button';
import { MarkdownText } from '../ui/markdown-text';
import { PageTitle } from '../ui/page-title';

export function WhitepaperPage({ whitepaper }: { whitepaper: string }) {
  return (
    <section>
      <PageTitle
        title="HAQQ Whitepaper"
        subtitle={
          <Link
            href="/haqq-whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button variant={2} className="inline-flex flex-row items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[6px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.41667 16.25H14.5833V9.16668H10.1667C9.61438 9.16668 9.16667 8.71896 9.16667 8.16668V3.75001H5.41667V16.25ZM13.893 7.50001L10.8333 4.44037V7.50001H13.893ZM15.4167 17.9167H4.58333C4.1231 17.9167 3.75 17.5436 3.75 17.0833V2.91668C3.75 2.45644 4.1231 2.08334 4.58333 2.08334H10.4882C10.7092 2.08334 10.9211 2.17114 11.0774 2.32742L16.0059 7.25593C16.1622 7.41221 16.25 7.62417 16.25 7.84519V17.0833C16.25 17.5436 15.8769 17.9167 15.4167 17.9167Z"
                  fill="currentColor"
                />
              </svg>

              <span>Download PDF</span>
            </Button>
          </Link>
        }
      />

      <div className="flex bg-white px-[16px] py-[48px] sm:px-[63px] md:py-[68px] lg:px-[79px] lg:py-[100px]">
        <article className="mx-auto max-w-5xl">
          <MarkdownText isBlack className="anchor-fix">
            {whitepaper}
          </MarkdownText>
        </article>
      </div>
    </section>
  );
}
