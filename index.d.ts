declare function checkEXC(address:string, opts:checkEXC.Options): Promise<number>

declare namespace checkEXC {
  export interface Options {
    useTestNet?: boolean
    requireChecksum?: boolean
    customEndpoint?: string
    timeout?: number
  }
}
export = checkEXC;