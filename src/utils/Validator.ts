export class Validator {
  static nonEmpty(value: string, fieldName: string): void {
    if (!value || value.trim() === "") {
      throw new Error(`${fieldName} cannot be empty`);
    }
  }

  static numeric(value: string, fieldName: string): number {
    const num = parseFloat(value);
    if (isNaN(num)) {
      throw new Error(`${fieldName} must be a valid number`);
    }
    return num;
  }

  static oneOf(value: string, allowed: string[], fieldName: string): void {
    if (!allowed.includes(value)) {
      throw new Error(`${fieldName} must be one of: ${allowed.join(", ")}`);
    }
  }

  static fileExists(filename: string): void {
    try {
      require("fs").statSync(filename);
    } catch {
      throw new Error(`File '${filename}' does not exist`);
    }
  }
}
