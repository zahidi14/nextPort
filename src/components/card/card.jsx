import React from "react";
import "../../styles/card/_card.scss";
import Link from "next/link";

const Card = ({ link, imgurl, desc, language, title }) => {
  return (
    <div className="cardv">
      <Link href={link} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98%"
          d
          height="auto"
          fill="none"
          viewBox="0 0 431 136"
        >
          <g className="rr">
            <path
              fill="#17BDEF"
              d="M42.72 108.913c20.492 8.449 44.74-.702 54.148-20.039l-1.42-.818c-9.7 18.332-31.903 26.932-52.12 19.425l-.608 1.432Zm-21.7-64.409c12.122-19.088 32.438-25.075 51.512-19.016l.608-1.227c-22.883-8.594-45.963 3.937-53.54 19.63l1.42.613Zm23.525 74.223 1.217-4.089c-3.143-.777-4.808-1.519-7.706-3.067l-.609.818c-12.048-5.41-17.652-10.807-24.741-24.128l1.216-.614c-1.6-2.437-2-3.969-2.636-6.952l-4.259 1.636c.597 2.807 1.103 4.373 2.231 7.157l1.42-.41c7.147 13.713 12.882 18.959 25.35 25.151l-.406 1.227c3.114 1.805 5.039 2.563 8.923 3.271Zm28.392-4.498 1.42 3.68c-1.479.818-2.415 1.083-4.259 1.227l-1.217-3.68s2.611-.417 4.056-1.227Zm8.315-3.272c1.533-.857 2.29-1.349 3.448-2.249l2.23 3.067c-1.244 1.063-2.103 1.594-3.853 2.454l-1.825-3.272ZM29.944 21.194l3.447-2.454 2.231 3.885-3.853 2.25-1.825-3.681Zm12.168-6.134 3.447-1.227 1.826 3.68-3.65 1.227-1.623-3.68Zm29.608-.818-.608 4.498c3.326.958 4.917 1.678 7.707 2.863l.608-1.023c12.71 6.562 17.969 11.907 24.336 24.128l-1.014.614 2.636 6.338 3.854-1.227-2.434-6.747-1.42.409c-6.298-13.06-11.697-18.54-24.741-24.946l.405-1.431c-3.316-1.578-5.297-2.38-9.328-3.476Zm3.245 99.169c1.654-.463 2.537-.834 4.056-1.636l2.028 3.681c-1.86 1.077-2.79 1.477-4.258 1.84l-1.826-3.885Z"
            />
          </g>
          <g className="rl">
            <path
              fill="#17BDEF"
              d="m105.994 53.5 3.853-.817 1.014 4.498-.811.205c1.926 15.149.533 22.897-6.287 35.373l.811.614c-5.092 7.839-8.57 11.739-15.615 17.38l-2.434-3.272c6.625-5.393 9.77-8.888 14.399-15.949l.811.41c6.222-12.492 7.496-19.947 6.084-34.148h-1.217l-.608-4.293ZM27.307 22.625l2.637 3.476c-7.192 4.95-10.21 8.5-14.4 15.745l-.855-.59C8.153 54.093 6.962 61.592 8.244 75.378l1.014-.204 1.42 3.885-4.056 1.635-1.42-4.498 1.014-.818c-1.545-14.569.113-22.274 6.692-35.352l-1.216-.84c5.083-7.037 8.463-10.685 15.615-16.562Zm8.315-5.112 3.65-1.635 2.231 3.68-3.65 2.045-2.231-4.09Zm36.098-3.271c-9.026-2.091-14.01-2.398-22.713-.818l.406 4.09c8.323-1.526 13.234-.9 21.7 1.226l.608-4.498Zm-4.258 105.303-.406-3.68c-9.674.843-14.511.745-21.294-1.227l-1.217 4.089c8.585 1.728 13.59 2.148 22.917.818Z"
            />
          </g>
          <g className="rf">
            <path
              fill="#17BDEF"
              d="M63.454 8.721h-5.321v1.227c26.686-.703 51.444 18.867 55.567 46.62l1.116-.205 1.115-.204c-5.055-24.48-23.448-44.025-48.278-47.083a55.48 55.48 0 0 0-4.199-.355ZM2.566 76.401l-2.028.41c6.536 31.033 30.116 48.535 57.595 48.459v-2.044c-30.167-.651-49.27-18.893-55.567-46.825Z"
            />
          </g>
          <path
            fill="#3DA79A"
            d="m128.91 121.181-.811-1.022 3.651-3.885 2.028-.818h13.993l.405 1.431-3.853 3.885-.811.409H128.91Z"
          />
          <path
            fill="#1D91B6"
            d="m151.421 121.181-.811-1.022 3.65-3.885 2.028-.818h13.994l.405 1.431-3.853 3.885-.811.409h-14.602Z"
          />
          <path
            fill="#B4B58D"
            d="m173.932 121.181-.811-1.022 3.65-3.885 2.028-.818h13.994l.405 1.431-3.853 3.885-.811.409h-14.602Z"
          />
          <g filter="url(#a)">
            <path
              fill="#17BDEF"
              fillOpacity={0.3}
              d="M101.735 124.452c7.966.211 11.674-1.006 16.833-5.725l4.664-4.907c4.048-3.096 6.741-4.02 12.371-4.09h51.714c4.658-.167 7.185.777 11.56 4.09l5.272 4.907c3.691 3.701 6.168 4.876 11.154 5.725h132.835v-.817h26.769c4.522-1.594 6.791-2.791 10.14-5.726l29.407-29.648c2.088-2.951 3.115-4.708 4.461-8.18l.203-27.398h.811V35.916h-.608V15.264c.016-3.733-1.12-5.048-5.273-5.93H70.707l-3.054-.258c24.83 3.058 43.223 22.602 48.278 47.083l-1.115.204c5.126 41.694-19.89 66.515-56.683 67.885v.204h43.602Z"
              shapeRendering="crispEdges"
            />
            <path
              stroke="#fff"
              strokeWidth={0.097}
              d="M58.133 124.452v-.204c36.793-1.37 61.809-26.19 56.683-67.885l1.115-.204c-5.055-24.48-23.448-44.025-48.278-47.083l3.054.258h343.341c4.153.882 5.289 2.197 5.273 5.93v20.652h.608v16.767h-.811l-.203 27.399c-1.346 3.47-2.373 5.228-4.461 8.179l-29.407 29.648c-3.349 2.935-5.618 4.132-10.14 5.726h-26.769v.817H215.303c-4.986-.849-7.463-2.024-11.154-5.725l-5.272-4.907c-4.375-3.313-6.902-4.257-11.56-4.09h-51.714c-5.63.07-8.323.994-12.371 4.09l-4.664 4.907c-5.159 4.719-8.867 5.936-16.833 5.725H58.133Zm0 0v-.817"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#b)">
            <path
              fill="#78CCE2"
              d="M419.929 52.683h-.811l-.203 27.399c-1.346 3.47-2.373 5.228-4.461 8.179l-29.407 29.648c-3.349 2.935-5.618 4.132-10.14 5.726h-26.769v1.84l26.769-.205c5.404-1.669 8.044-3.247 11.966-7.361l29.203-29.648c2.235-2.95 3.216-4.74 4.462-8.18V52.684h-.609Z"
            />
          </g>
          <g filter="url(#c)">
            <path
              fill="#78CCE2"
              d="M392.551 9.334v.818h21.497c4.153.882 5.289 2.197 5.273 5.93v20.652h1.217V16.082c-.199-5.085-1.672-6.511-6.49-6.748h-21.497Z"
            />
          </g>
          //input text
          <text x="130" y="35" fontSize="20" fill="#fff" filter="url(#glow)">
            {title}
          </text>
          <text x="130" y="65" fontSize="14" fill="#fff" filter="url(#glow)">
            {language.map((lang, index) => (
              <tspan key={index}>{lang},</tspan>
            ))}
          </text>
          <text x="130" y="90" fontSize="14" fill="#fff" filter="url(#glow)">
            {desc}
          </text>
          <defs>
            <clipPath id="circleClip">
              <ellipse
                cx={58.424}
                cy={66.635}
                fill="#D9D9D9"
                fillOpacity={50}
                rx={45.264}
                ry={45.637}
              />
            </clipPath>
          </defs>
          <image
            href={imgurl}
            x={13}
            y={21}
            width={90}
            height={90}
            clipPath="url(#circleClip)"
          />
          <defs>
            <filter
              id="a"
              width={378.093}
              height={131.695}
              x={49.985}
              y={0.928}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={4.05} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.470588 0 0 0 0 0.8 0 0 0 0 0.886275 0 0 0 0.68 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_68"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_68"
                result="shape"
              />
            </filter>
            <filter
              id="b"
              width={91.6}
              height={91.992}
              x={338.538}
              y={43.083}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={4.8} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.470588 0 0 0 0 0.8 0 0 0 0 0.886275 0 0 0 1 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_68"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_68"
                result="shape"
              />
            </filter>
            <filter
              id="c"
              width={46.187}
              height={45.599}
              x={383.451}
              y={0.234}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={4.55} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.470588 0 0 0 0 0.8 0 0 0 0 0.886275 0 0 0 1 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_68"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_68"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default Card;
