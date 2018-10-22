export declare function decorator(constructorObj: Function): void;
/**
 * math类 COLOR
 */
export declare class color {
    /**
     * r通道
     */
    r: number;
    /**
     * g通道
     */
    g: number;
    /**
     * b通道
     */
    b: number;
    /**
     * a通道
     */
    a: number;
    /**
     * 红色
     */
    static readonly Red: color;
    constructor(r: number, g: number, b?: number, a?: number);
    /**
     * 复制 color
     * @param from clone from
     * @returns 返回 new instanced Color
    * ```
    * let a:color=color.clone(color.Red);
    * ```
     */
    static clone(from: color): color;
    /**
     * Copy the values from one color to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    static copy(a: color, out: color): color;
}
