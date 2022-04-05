declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue2-transitions" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const SlideXLeftTransition: any;
}
