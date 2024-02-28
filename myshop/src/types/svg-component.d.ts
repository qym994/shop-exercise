
declare module '~virtual/svg-component' {
  const SvgIcon: import("vue").DefineComponent<{
      name: {
          type: import("vue").PropType<"icon-baby" | "icon-back" | "icon-backtop" | "icon-chair" | "icon-computer" | "icon-fail" | "icon-food" | "icon-home" | "icon-logout" | "icon-notification" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user">;
          default: string;
          required: true;
      };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
      name: {
          type: import("vue").PropType<"icon-baby" | "icon-back" | "icon-backtop" | "icon-chair" | "icon-computer" | "icon-fail" | "icon-food" | "icon-home" | "icon-logout" | "icon-notification" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user">;
          default: string;
          required: true;
      };
  }>>, {
      name: "icon-baby" | "icon-back" | "icon-backtop" | "icon-chair" | "icon-computer" | "icon-fail" | "icon-food" | "icon-home" | "icon-logout" | "icon-notification" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user";
  }>;
  export const svgNames: ["icon-baby" , "icon-back" , "icon-backtop" , "icon-chair" , "icon-computer" , "icon-fail" , "icon-food" , "icon-home" , "icon-logout" , "icon-notification" , "icon-personalcare" , "icon-shirt" , "icon-shoppingcart" , "icon-smartphone" , "icon-sports" , "icon-user"];
  export type SvgName = "icon-baby" | "icon-back" | "icon-backtop" | "icon-chair" | "icon-computer" | "icon-fail" | "icon-food" | "icon-home" | "icon-logout" | "icon-notification" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user";
  export default SvgIcon;
}
