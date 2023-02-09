import React from "react";


const ErrorMessage = ({ msg }) => (
  <div
    className="errorMessage"
    style={{ height: "300px", width: "400px", zIndex: 999999 }}
  >
    <svg
      width="40.000000pt"
      height="40.000000pt"
      viewBox="0 0 1280.000000 1280.000000"
    >
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M7220 12429 c-137 -41 -206 -60 -430 -123 -69 -19 -228 -65 -355
-101 -126 -37 -284 -82 -350 -100 -102 -28 -440 -125 -690 -197 -38 -11 -92
-26 -120 -33 -228 -61 -481 -139 -509 -157 -19 -13 -46 -41 -61 -63 -43 -67
-49 -105 -35 -255 6 -74 13 -151 14 -170 2 -19 6 -62 10 -95 4 -33 11 -103 17
-155 30 -278 36 -305 93 -364 18 -20 30 -39 26 -41 -5 -3 -21 -27 -36 -53 -39
-69 -38 -132 11 -533 15 -120 35 -170 91 -218 l36 -32 -25 -27 c-48 -51 -68
-107 -66 -180 1 -36 6 -84 10 -107 4 -22 12 -80 19 -130 28 -222 38 -254 93
-312 l31 -33 -20 -22 c-48 -55 -57 -108 -43 -253 5 -60 14 -153 19 -205 5 -52
14 -144 20 -205 12 -122 28 -303 35 -380 2 -27 9 -98 14 -157 6 -60 16 -156
21 -215 6 -60 15 -151 21 -203 5 -52 16 -171 24 -265 8 -93 19 -216 25 -272
32 -325 48 -493 55 -583 4 -54 17 -187 35 -365 18 -178 31 -311 35 -365 9
-114 32 -353 56 -590 15 -159 31 -334 31 -350 0 -8 4 -51 8 -95 9 -81 20 -185
41 -400 14 -137 28 -173 91 -232 74 -67 122 -76 303 -54 55 6 138 16 185 21
47 5 126 14 175 20 50 5 155 17 235 25 287 29 312 33 375 64 37 18 83 31 120
35 252 22 302 34 357 84 69 62 76 89 103 392 13 147 29 306 56 570 5 52 16
169 24 260 8 91 20 212 25 270 6 58 15 146 20 195 25 247 31 314 35 360 6 68
24 260 35 370 5 50 14 137 20 195 5 58 17 179 25 270 8 91 20 212 25 270 6 58
15 146 20 195 17 172 31 310 36 365 10 118 28 304 54 555 5 50 16 167 24 260
9 94 20 213 25 265 6 52 15 145 21 205 6 61 15 155 21 210 5 55 12 123 14 150
2 28 9 102 15 165 10 107 17 175 40 405 11 110 29 302 35 370 2 28 9 100 15
160 6 61 15 151 20 200 5 50 14 137 20 195 6 58 17 175 25 260 8 85 20 209 27
275 18 170 16 232 -10 281 -26 51 -79 98 -128 114 -36 12 -141 9 -176 -5 -13
-5 -22 4 -39 36 -23 45 -22 38 -3 234 21 218 16 265 -39 337 -45 59 -104 90
-180 94 -50 3 -89 -5 -197 -37z"
        />
        <path
          d="M6365 3494 c-99 -15 -252 -61 -330 -99 -27 -14 -66 -25 -85 -25 -39
0 -162 -22 -256 -44 -202 -49 -420 -176 -591 -344 -186 -182 -301 -367 -371
-594 -45 -143 -52 -182 -64 -335 -10 -133 -3 -325 17 -428 86 -449 386 -851
785 -1050 187 -93 342 -132 564 -142 135 -5 320 7 383 26 168 52 221 71 298
110 161 83 233 137 385 290 80 80 174 166 210 190 306 207 521 559 565 923 8
74 8 281 0 356 -59 503 -424 957 -900 1117 -176 59 -417 79 -610 49z"
        />
      </g>
    </svg>
    <p>{msg} </p>{" "}
  </div>
);

export default ErrorMessage;