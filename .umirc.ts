import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'css-tricks',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /model\.(t|j)sx?$/,
          /common\//,
          /commons\//,
          /component\//,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
