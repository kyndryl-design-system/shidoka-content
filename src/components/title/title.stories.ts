import { html } from 'lit';
import './title';

export default {
  title: 'Common/Title',
  component: 'kd-title',
};

const args = {
  borderColor: '#2F808C',
};
export const Template = {
  args,
  render: (args: any) => {
    return html`
      <kd-title>
        <svg
          slot="title"
          xmlns="http://www.w3.org/2000/svg"
          width="628"
          height="133"
          viewBox="0 0 628 133"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M104.077 99.8119C100.562 110.58 94.2865 118.687 85.8458 124.133C77.2305 129.693 66.3286 132.5 53.7439 132.5C37.4098 132.5 24.1102 126.849 14.8929 117.198C5.67307 107.545 0.5 93.8496 0.5 77.6969C0.5 61.5494 5.86455 47.9029 15.1823 38.2959C24.4987 28.6905 37.8005 23.0886 53.7439 23.0886C69.9821 23.0886 83.183 28.6433 92.3259 38.2918C101.472 47.9432 106.598 61.735 106.598 78.2811C106.598 80.6637 106.424 83.3995 106.075 86.1545H30.377H29.8129L29.8806 86.7145C30.9601 95.6448 33.8131 102.281 37.9981 106.691C42.1915 111.109 47.6827 113.248 53.9387 113.248C59.7544 113.248 64.1459 112.015 67.5616 109.654C70.8953 107.35 73.2493 104.006 75.1014 99.8119H104.077ZM76.7214 67.2921H77.2761L77.2188 66.7404C76.4309 59.1575 73.767 53.0562 69.6807 48.8452C65.5894 44.6291 60.1025 42.3404 53.7439 42.3404C47.6949 42.3404 42.4019 44.228 38.3025 48.2525C34.2106 52.2696 31.3539 58.3705 30.0775 66.7165L29.9895 67.2921H30.5717H76.7214ZM165.292 125.538L165.774 127.29L166.256 125.538L193.806 25.4253H222.361L192.464 130.163H138.89L108.993 25.4253H137.743L165.292 125.538ZM328.383 99.8119C324.868 110.58 318.592 118.687 310.152 124.133C301.536 129.693 290.634 132.5 278.05 132.5C261.716 132.5 248.416 126.849 239.199 117.198C229.979 107.545 224.806 93.8496 224.806 77.6969C224.806 61.5494 230.17 47.9029 239.488 38.2959C248.804 28.6905 262.106 23.0886 278.05 23.0886C294.288 23.0886 307.489 28.6433 316.632 38.2918C325.777 47.9432 330.904 61.735 330.904 78.2811C330.904 80.6637 330.73 83.3995 330.381 86.1545H254.683H254.119L254.186 86.7145C255.266 95.6448 258.119 102.281 262.304 106.691C266.497 111.109 271.989 113.248 278.244 113.248C284.06 113.248 288.452 112.015 291.867 109.654C295.201 107.35 297.555 104.006 299.407 99.8119H328.383ZM301.027 67.2921H301.582L301.525 66.7404C300.737 59.1575 298.073 53.0562 293.987 48.8452C289.895 44.6291 284.408 42.3404 278.05 42.3404C272.001 42.3404 266.708 44.228 262.608 48.2525C258.516 52.2696 255.66 58.3705 254.383 66.7165L254.295 67.2921H254.878H301.027ZM373.961 46.5403L374.93 46.7128C377.341 40.1563 381.091 34.2539 386.503 29.9916C391.909 25.7338 399.002 23.0886 408.148 23.0886C420.381 23.0886 429.038 27.4637 434.65 34.6767C440.278 41.9095 442.894 52.0579 442.894 63.6764V130.163H414.101V70.1025C414.101 60.9001 412.341 54.1035 408.937 49.5979C405.513 45.0667 400.482 42.9246 394.128 42.9246C387.869 42.9246 382.839 45.0683 379.392 49.6473C375.965 54.201 374.156 61.0941 374.156 70.4919V130.163H345.363V25.4253H373.961V46.5403ZM500.258 46.235H499.758V46.735V96.9751C499.758 101.624 500.896 104.77 503.248 106.731C505.578 108.672 508.99 109.354 513.304 109.354H523.125V130.163H506.878C496.536 130.163 487.555 127.601 481.171 122.484C474.802 117.379 470.965 109.691 470.965 99.3119V46.735V46.235H470.465H451.298V25.4253H470.465H470.965V24.9253V0.5H499.758V24.9253V25.4253H500.258H522.93V46.235H500.258ZM577.177 23.0886C600.784 23.0886 620.371 32.7659 625.225 52.4663H596.219C593.646 45.7718 585.891 42.3404 577.372 42.3404C572.549 42.3404 568.032 43.2246 564.701 44.9781C561.362 46.7353 559.152 49.4085 559.152 52.9663C559.152 54.5648 559.553 55.9411 560.349 57.1352C561.141 58.3233 562.305 59.3025 563.786 60.1436C566.733 61.817 571.039 62.9977 576.487 64.1651C576.487 64.1652 576.488 64.1653 576.488 64.1653L595.179 68.2541C606.239 70.6795 614.315 74.2551 619.623 79.3007C624.912 84.3279 627.5 90.8584 627.5 99.3119C627.5 109.926 622.252 118.2 613.49 123.841C604.711 129.494 592.4 132.5 578.345 132.5C565.364 132.5 554.077 129.738 545.591 124.136C537.261 118.638 531.596 110.384 529.67 99.2277H558.661C559.817 104.497 562.629 108.001 566.335 110.185C570.115 112.413 574.79 113.248 579.514 113.248C586.08 113.248 591.192 112.172 594.681 110.189C598.195 108.192 600.07 105.264 600.07 101.649C600.07 99.986 599.793 98.5049 599.122 97.1705C598.451 95.8347 597.403 94.6795 595.912 93.6436C592.953 91.5874 588.195 89.9646 580.989 88.3091L580.984 88.308L562.29 84.2187L562.288 84.2182C552.305 82.0859 544.662 78.7055 539.521 73.9466C534.396 69.2033 531.722 63.0593 531.722 55.3031C531.722 45.4692 536.774 37.4338 544.988 31.8376C553.212 26.2348 564.596 23.0886 577.177 23.0886Z"
            stroke="${args.borderColor}"
          />
        </svg>
      </kd-title>
    `;
  },
};
