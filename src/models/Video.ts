export default class Video {
  private id: string;

  private title: string;

  constructor($id: string, $title: string) {
    this.id = $id;
    this.title = $title;
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
}
