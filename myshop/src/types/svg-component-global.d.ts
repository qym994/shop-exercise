
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    SvgIcon: import("vue").DefineComponent<{
        name: {
            type: import("vue").PropType<"icon-baby" | "icon-chair" | "icon-computer" | "icon-food" | "icon-home" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user">;
            default: string;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<"icon-baby" | "icon-chair" | "icon-computer" | "icon-food" | "icon-home" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user">;
            default: string;
            required: true;
        };
    }>>, {
        name: "icon-baby" | "icon-chair" | "icon-computer" | "icon-food" | "icon-home" | "icon-personalcare" | "icon-shirt" | "icon-shoppingcart" | "icon-smartphone" | "icon-sports" | "icon-user";
    }>;
  }
}
