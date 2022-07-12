import React from "react";

function LoadingAnim() {
  if(process.env.NODE_ENV !== "production") {
    return <></>
  }
  return (
    <>
      <div className="loading-animation">
        <svg
          id="name-svg"
          width="840"
          height="159"
          viewBox="0 0 840 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="-0.791992"
            y="0.415985"
            width="841"
            height="159"
            fill="black"
          >
            <rect
              fill="white"
              x="-0.791992"
              y="0.415985"
              width="841"
              height="159"
            />
            <path d="M39.912 116.008C33.288 116.008 27.336 114.856 22.056 112.552C16.872 110.152 12.792 106.888 9.81601 102.76C6.84001 98.536 5.30401 93.688 5.20801 88.216H19.176C19.656 92.92 21.576 96.904 24.936 100.168C28.392 103.336 33.384 104.92 39.912 104.92C46.152 104.92 51.048 103.384 54.6 100.312C58.248 97.144 60.072 93.112 60.072 88.216C60.072 84.376 59.016 81.256 56.904 78.856C54.792 76.456 52.152 74.632 48.984 73.384C45.816 72.136 41.544 70.792 36.168 69.352C29.544 67.624 24.216 65.896 20.184 64.168C16.248 62.44 12.84 59.752 9.96001 56.104C7.17601 52.36 5.78401 47.368 5.78401 41.128C5.78401 35.656 7.17601 30.808 9.96001 26.584C12.744 22.36 16.632 19.096 21.624 16.792C26.712 14.488 32.52 13.336 39.048 13.336C48.456 13.336 56.136 15.688 62.088 20.392C68.136 25.096 71.544 31.336 72.312 39.112H57.912C57.432 35.272 55.416 31.912 51.864 29.032C48.312 26.056 43.608 24.568 37.752 24.568C32.28 24.568 27.816 26.008 24.36 28.888C20.904 31.672 19.176 35.608 19.176 40.696C19.176 44.344 20.184 47.32 22.2 49.624C24.312 51.928 26.856 53.704 29.832 54.952C32.904 56.104 37.176 57.448 42.648 58.984C49.272 60.808 54.6 62.632 58.632 64.456C62.664 66.184 66.12 68.92 69 72.664C71.88 76.312 73.32 81.304 73.32 87.64C73.32 92.536 72.024 97.144 69.432 101.464C66.84 105.784 63 109.288 57.912 111.976C52.824 114.664 46.824 116.008 39.912 116.008Z" />
            <path d="M162.588 36.088V115H149.484V103.336C146.988 107.368 143.484 110.536 138.972 112.84C134.556 115.048 129.66 116.152 124.284 116.152C118.14 116.152 112.62 114.904 107.724 112.408C102.828 109.816 98.9396 105.976 96.0596 100.888C93.2756 95.8 91.8836 89.608 91.8836 82.312V36.088H104.844V80.584C104.844 88.36 106.812 94.36 110.748 98.584C114.684 102.712 120.06 104.776 126.876 104.776C133.884 104.776 139.404 102.616 143.436 98.296C147.468 93.976 149.484 87.688 149.484 79.432V36.088H162.588Z" />
            <path d="M223.161 34.648C232.761 34.648 240.537 37.576 246.489 43.432C252.441 49.192 255.417 57.544 255.417 68.488V115H242.457V70.36C242.457 62.488 240.489 56.488 236.553 52.36C232.617 48.136 227.241 46.024 220.425 46.024C213.513 46.024 207.993 48.184 203.865 52.504C199.833 56.824 197.817 63.112 197.817 71.368V115H184.713V36.088H197.817V47.32C200.409 43.288 203.913 40.168 208.329 37.96C212.841 35.752 217.785 34.648 223.161 34.648Z" />
            <path d="M392.541 14.632V115H379.437V69.496H328.317V115H315.213V14.632H328.317V58.696H379.437V14.632H392.541Z" />
            <path d="M421.684 23.272C419.188 23.272 417.076 22.408 415.348 20.68C413.62 18.952 412.756 16.84 412.756 14.344C412.756 11.848 413.62 9.73599 415.348 8.00799C417.076 6.27999 419.188 5.41599 421.684 5.41599C424.084 5.41599 426.1 6.27999 427.732 8.00799C429.46 9.73599 430.324 11.848 430.324 14.344C430.324 16.84 429.46 18.952 427.732 20.68C426.1 22.408 424.084 23.272 421.684 23.272ZM428.02 36.088V115H414.916V36.088H428.02Z" />
            <path d="M482.898 34.792C489.714 34.792 495.666 36.28 500.754 39.256C505.938 42.232 509.778 45.976 512.274 50.488V36.088H525.522V116.728C525.522 123.928 523.986 130.312 520.914 135.88C517.842 141.544 513.426 145.96 507.666 149.128C502.002 152.296 495.378 153.88 487.794 153.88C477.426 153.88 468.786 151.432 461.874 146.536C454.962 141.64 450.882 134.968 449.634 126.52H462.594C464.034 131.32 467.01 135.16 471.522 138.04C476.034 141.016 481.458 142.504 487.794 142.504C494.994 142.504 500.85 140.248 505.362 135.736C509.97 131.224 512.274 124.888 512.274 116.728V100.168C509.682 104.776 505.842 108.616 500.754 111.688C495.666 114.76 489.714 116.296 482.898 116.296C475.89 116.296 469.506 114.568 463.746 111.112C458.082 107.656 453.618 102.808 450.354 96.568C447.09 90.328 445.458 83.224 445.458 75.256C445.458 67.192 447.09 60.136 450.354 54.088C453.618 47.944 458.082 43.192 463.746 39.832C469.506 36.472 475.89 34.792 482.898 34.792ZM512.274 75.4C512.274 69.448 511.074 64.264 508.674 59.848C506.274 55.432 503.01 52.072 498.882 49.768C494.85 47.368 490.386 46.168 485.49 46.168C480.594 46.168 476.13 47.32 472.098 49.624C468.066 51.928 464.85 55.288 462.45 59.704C460.05 64.12 458.85 69.304 458.85 75.256C458.85 81.304 460.05 86.584 462.45 91.096C464.85 95.512 468.066 98.92 472.098 101.32C476.13 103.624 480.594 104.776 485.49 104.776C490.386 104.776 494.85 103.624 498.882 101.32C503.01 98.92 506.274 95.512 508.674 91.096C511.074 86.584 512.274 81.352 512.274 75.4Z" />
            <path d="M617.65 36.088V115H604.546V103.336C602.05 107.368 598.546 110.536 594.034 112.84C589.618 115.048 584.722 116.152 579.346 116.152C573.202 116.152 567.682 114.904 562.786 112.408C557.89 109.816 554.002 105.976 551.122 100.888C548.338 95.8 546.946 89.608 546.946 82.312V36.088H559.906V80.584C559.906 88.36 561.874 94.36 565.81 98.584C569.746 102.712 575.122 104.776 581.938 104.776C588.946 104.776 594.466 102.616 598.498 98.296C602.53 93.976 604.546 87.688 604.546 79.432V36.088H617.65Z" />
            <path d="M634.88 75.4C634.88 67.24 636.512 60.136 639.776 54.088C643.04 47.944 647.552 43.192 653.312 39.832C659.168 36.472 665.84 34.792 673.328 34.792C683.024 34.792 690.992 37.144 697.232 41.848C703.568 46.552 707.744 53.08 709.76 61.432H695.648C694.304 56.632 691.663 52.84 687.727 50.056C683.887 47.272 679.088 45.88 673.328 45.88C665.84 45.88 659.791 48.472 655.183 53.656C650.575 58.744 648.271 65.992 648.271 75.4C648.271 84.904 650.575 92.248 655.183 97.432C659.791 102.616 665.84 105.208 673.328 105.208C679.088 105.208 683.887 103.864 687.727 101.176C691.567 98.488 694.208 94.648 695.648 89.656H709.76C707.648 97.72 703.424 104.2 697.088 109.096C690.752 113.896 682.832 116.296 673.328 116.296C665.84 116.296 659.168 114.616 653.312 111.256C647.552 107.896 643.04 103.144 639.776 97C636.512 90.856 634.88 83.656 634.88 75.4Z" />
            <path d="M766.412 34.648C772.364 34.648 777.74 35.944 782.54 38.536C787.34 41.032 791.084 44.824 793.772 49.912C796.556 55 797.948 61.192 797.948 68.488V115H784.988V70.36C784.988 62.488 783.02 56.488 779.084 52.36C775.148 48.136 769.772 46.024 762.956 46.024C756.044 46.024 750.524 48.184 746.396 52.504C742.364 56.824 740.348 63.112 740.348 71.368V115H727.244V8.43999H740.348V47.32C742.94 43.288 746.492 40.168 751.004 37.96C755.612 35.752 760.748 34.648 766.412 34.648Z" />
            <path d="M826.122 23.272C823.626 23.272 821.514 22.408 819.786 20.68C818.058 18.952 817.194 16.84 817.194 14.344C817.194 11.848 818.058 9.73599 819.786 8.00799C821.514 6.27999 823.626 5.41599 826.122 5.41599C828.522 5.41599 830.538 6.27999 832.17 8.00799C833.898 9.73599 834.762 11.848 834.762 14.344C834.762 16.84 833.898 18.952 832.17 20.68C830.538 22.408 828.522 23.272 826.122 23.272ZM832.458 36.088V115H819.354V36.088H832.458Z" />
          </mask>
          <path
            d="M39.912 116.008C33.288 116.008 27.336 114.856 22.056 112.552C16.872 110.152 12.792 106.888 9.81601 102.76C6.84001 98.536 5.30401 93.688 5.20801 88.216H19.176C19.656 92.92 21.576 96.904 24.936 100.168C28.392 103.336 33.384 104.92 39.912 104.92C46.152 104.92 51.048 103.384 54.6 100.312C58.248 97.144 60.072 93.112 60.072 88.216C60.072 84.376 59.016 81.256 56.904 78.856C54.792 76.456 52.152 74.632 48.984 73.384C45.816 72.136 41.544 70.792 36.168 69.352C29.544 67.624 24.216 65.896 20.184 64.168C16.248 62.44 12.84 59.752 9.96001 56.104C7.17601 52.36 5.78401 47.368 5.78401 41.128C5.78401 35.656 7.17601 30.808 9.96001 26.584C12.744 22.36 16.632 19.096 21.624 16.792C26.712 14.488 32.52 13.336 39.048 13.336C48.456 13.336 56.136 15.688 62.088 20.392C68.136 25.096 71.544 31.336 72.312 39.112H57.912C57.432 35.272 55.416 31.912 51.864 29.032C48.312 26.056 43.608 24.568 37.752 24.568C32.28 24.568 27.816 26.008 24.36 28.888C20.904 31.672 19.176 35.608 19.176 40.696C19.176 44.344 20.184 47.32 22.2 49.624C24.312 51.928 26.856 53.704 29.832 54.952C32.904 56.104 37.176 57.448 42.648 58.984C49.272 60.808 54.6 62.632 58.632 64.456C62.664 66.184 66.12 68.92 69 72.664C71.88 76.312 73.32 81.304 73.32 87.64C73.32 92.536 72.024 97.144 69.432 101.464C66.84 105.784 63 109.288 57.912 111.976C52.824 114.664 46.824 116.008 39.912 116.008Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M162.588 36.088V115H149.484V103.336C146.988 107.368 143.484 110.536 138.972 112.84C134.556 115.048 129.66 116.152 124.284 116.152C118.14 116.152 112.62 114.904 107.724 112.408C102.828 109.816 98.9396 105.976 96.0596 100.888C93.2756 95.8 91.8836 89.608 91.8836 82.312V36.088H104.844V80.584C104.844 88.36 106.812 94.36 110.748 98.584C114.684 102.712 120.06 104.776 126.876 104.776C133.884 104.776 139.404 102.616 143.436 98.296C147.468 93.976 149.484 87.688 149.484 79.432V36.088H162.588Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M223.161 34.648C232.761 34.648 240.537 37.576 246.489 43.432C252.441 49.192 255.417 57.544 255.417 68.488V115H242.457V70.36C242.457 62.488 240.489 56.488 236.553 52.36C232.617 48.136 227.241 46.024 220.425 46.024C213.513 46.024 207.993 48.184 203.865 52.504C199.833 56.824 197.817 63.112 197.817 71.368V115H184.713V36.088H197.817V47.32C200.409 43.288 203.913 40.168 208.329 37.96C212.841 35.752 217.785 34.648 223.161 34.648Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M392.541 14.632V115H379.437V69.496H328.317V115H315.213V14.632H328.317V58.696H379.437V14.632H392.541Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M421.684 23.272C419.188 23.272 417.076 22.408 415.348 20.68C413.62 18.952 412.756 16.84 412.756 14.344C412.756 11.848 413.62 9.73599 415.348 8.00799C417.076 6.27999 419.188 5.41599 421.684 5.41599C424.084 5.41599 426.1 6.27999 427.732 8.00799C429.46 9.73599 430.324 11.848 430.324 14.344C430.324 16.84 429.46 18.952 427.732 20.68C426.1 22.408 424.084 23.272 421.684 23.272ZM428.02 36.088V115H414.916V36.088H428.02Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M482.898 34.792C489.714 34.792 495.666 36.28 500.754 39.256C505.938 42.232 509.778 45.976 512.274 50.488V36.088H525.522V116.728C525.522 123.928 523.986 130.312 520.914 135.88C517.842 141.544 513.426 145.96 507.666 149.128C502.002 152.296 495.378 153.88 487.794 153.88C477.426 153.88 468.786 151.432 461.874 146.536C454.962 141.64 450.882 134.968 449.634 126.52H462.594C464.034 131.32 467.01 135.16 471.522 138.04C476.034 141.016 481.458 142.504 487.794 142.504C494.994 142.504 500.85 140.248 505.362 135.736C509.97 131.224 512.274 124.888 512.274 116.728V100.168C509.682 104.776 505.842 108.616 500.754 111.688C495.666 114.76 489.714 116.296 482.898 116.296C475.89 116.296 469.506 114.568 463.746 111.112C458.082 107.656 453.618 102.808 450.354 96.568C447.09 90.328 445.458 83.224 445.458 75.256C445.458 67.192 447.09 60.136 450.354 54.088C453.618 47.944 458.082 43.192 463.746 39.832C469.506 36.472 475.89 34.792 482.898 34.792ZM512.274 75.4C512.274 69.448 511.074 64.264 508.674 59.848C506.274 55.432 503.01 52.072 498.882 49.768C494.85 47.368 490.386 46.168 485.49 46.168C480.594 46.168 476.13 47.32 472.098 49.624C468.066 51.928 464.85 55.288 462.45 59.704C460.05 64.12 458.85 69.304 458.85 75.256C458.85 81.304 460.05 86.584 462.45 91.096C464.85 95.512 468.066 98.92 472.098 101.32C476.13 103.624 480.594 104.776 485.49 104.776C490.386 104.776 494.85 103.624 498.882 101.32C503.01 98.92 506.274 95.512 508.674 91.096C511.074 86.584 512.274 81.352 512.274 75.4Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M617.65 36.088V115H604.546V103.336C602.05 107.368 598.546 110.536 594.034 112.84C589.618 115.048 584.722 116.152 579.346 116.152C573.202 116.152 567.682 114.904 562.786 112.408C557.89 109.816 554.002 105.976 551.122 100.888C548.338 95.8 546.946 89.608 546.946 82.312V36.088H559.906V80.584C559.906 88.36 561.874 94.36 565.81 98.584C569.746 102.712 575.122 104.776 581.938 104.776C588.946 104.776 594.466 102.616 598.498 98.296C602.53 93.976 604.546 87.688 604.546 79.432V36.088H617.65Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M634.88 75.4C634.88 67.24 636.512 60.136 639.776 54.088C643.04 47.944 647.552 43.192 653.312 39.832C659.168 36.472 665.84 34.792 673.328 34.792C683.024 34.792 690.992 37.144 697.232 41.848C703.568 46.552 707.744 53.08 709.76 61.432H695.648C694.304 56.632 691.663 52.84 687.727 50.056C683.887 47.272 679.088 45.88 673.328 45.88C665.84 45.88 659.791 48.472 655.183 53.656C650.575 58.744 648.271 65.992 648.271 75.4C648.271 84.904 650.575 92.248 655.183 97.432C659.791 102.616 665.84 105.208 673.328 105.208C679.088 105.208 683.887 103.864 687.727 101.176C691.567 98.488 694.208 94.648 695.648 89.656H709.76C707.648 97.72 703.424 104.2 697.088 109.096C690.752 113.896 682.832 116.296 673.328 116.296C665.84 116.296 659.168 114.616 653.312 111.256C647.552 107.896 643.04 103.144 639.776 97C636.512 90.856 634.88 83.656 634.88 75.4Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M766.412 34.648C772.364 34.648 777.74 35.944 782.54 38.536C787.34 41.032 791.084 44.824 793.772 49.912C796.556 55 797.948 61.192 797.948 68.488V115H784.988V70.36C784.988 62.488 783.02 56.488 779.084 52.36C775.148 48.136 769.772 46.024 762.956 46.024C756.044 46.024 750.524 48.184 746.396 52.504C742.364 56.824 740.348 63.112 740.348 71.368V115H727.244V8.43999H740.348V47.32C742.94 43.288 746.492 40.168 751.004 37.96C755.612 35.752 760.748 34.648 766.412 34.648Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M826.122 23.272C823.626 23.272 821.514 22.408 819.786 20.68C818.058 18.952 817.194 16.84 817.194 14.344C817.194 11.848 818.058 9.73599 819.786 8.00799C821.514 6.27999 823.626 5.41599 826.122 5.41599C828.522 5.41599 830.538 6.27999 832.17 8.00799C833.898 9.73599 834.762 11.848 834.762 14.344C834.762 16.84 833.898 18.952 832.17 20.68C830.538 22.408 828.522 23.272 826.122 23.272ZM832.458 36.088V115H819.354V36.088H832.458Z"
            stroke="#FAFAFA"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
        </svg>
      </div>
    </>
  );
}

export default LoadingAnim;
