import { type FC, useId } from 'react';

const FileIcon: FC = () => {
    const titleId = useId();
    return (
        <svg
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            role="img"
            aria-labelledby={titleId}
        >
            <title id={titleId}>Fil</title>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-.293-.707l-3-3A1 1 0 0 0 16 2H5Zm1 18V4h8v2a2 2 0 0 0 2 2h2v12H6ZM17.586 6 16 4.414V6h1.586Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

export default FileIcon;
