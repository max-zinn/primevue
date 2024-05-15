/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 *
 * @module radiobutton
 *
 */
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, DesignToken, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type RadioButtonPassThroughOptionType = RadioButtonPassThroughAttributes | ((options: RadioButtonPassThroughMethodOptions) => RadioButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface RadioButtonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: RadioButtonProps;
    /**
     * Defines current inline state.
     */
    state: RadioButtonState;
    /**
     * Defines current options.
     */
    context: RadioButtonContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link RadioButtonProps.pt}
 */
export interface RadioButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: RadioButtonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface RadioButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in RadioButton component.
 */
export interface RadioButtonState {
    [key: string]: any;
}

/**
 * Defines valid properties in RadioButton component.
 */
export interface RadioButtonProps {
    /**
     * Value of the checkbox.
     */
    value?: any;
    /**
     * Value binding of the checkbox.
     */
    modelValue?: any;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * Allows to select a boolean value.
     * @default false
     */
    binary?: boolean;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {RadioButtonPassThroughOptions}
     */
    pt?: PassThrough<RadioButtonPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines current options in RadioButton component.
 */
export interface RadioButtonContext {
    /**
     * Current checked state of the item as a boolean.
     * @defaultValue false
     */
    checked: boolean;
    /**
     * Current disabled state of the item as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

export interface RadioButtonSlots {}

/**
 * Defines valid emits in RadioButton component.
 */
export interface RadioButtonEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on radio button value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

/**
 * **PrimeVue - RadioButton**
 *
 * _RadioButton is an extension to standard radio button element with theming._
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class RadioButton extends ClassComponent<RadioButtonProps, RadioButtonSlots, RadioButtonEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        RadioButton: GlobalComponentConstructor<RadioButton>;
    }
}

export default RadioButton;
