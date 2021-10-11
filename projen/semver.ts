const ALLOWED_MODES = ['~', '^'];

export class Semver {
  /**
   * Accept only an exact version
   */
  public static pinned(version: string) { return new Semver(version); }

  /**
   * Accept any minor version.
   *
   * >= version
   * < next major version
   */
  public static caret(version: string) { return new Semver(version, '^'); }

  /**
   * Accept patches.
   *
   * >= version
   * < next minor version
   */
  public static tilde(version: string) { return new Semver(version, '~'); }

  public readonly spec: string;
  public readonly version: string;
  public readonly mode?: string;

  private constructor(version: string, mode?: string) {
    if (mode && !ALLOWED_MODES.includes(mode)) {
      throw new Error(`mode "${mode}" not allowed. allowed modes: ${ALLOWED_MODES.join(',')}`);
    }

    this.version = version;
    this.mode = mode;
    this.spec = `${mode ?? ''}${version}`;
  }
}
