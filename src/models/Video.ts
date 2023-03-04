export default class Video {
  private id: string;

  private title: string;

  private description: string;

  constructor($id: string, $title: string, $description: string) {
    this.id = $id;
    this.title = $title;
    this.description = $description;
  }

  /**
     * Getter $id
     * @return {string}
     */
  public get $id(): string {
    return this.id;
  }

  /**
     * Getter $title
     * @return {string}
     */
  public get $title(): string {
    return this.title;
  }

  /**
     * Getter $description
     * @return {string}
     */
  public get $description(): string {
    return this.description;
  }
}
