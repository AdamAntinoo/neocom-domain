/**
 * Base for published, renderable domain nodes.
 * Consumers (front/back) resolve this package via npm; do not redefine parallel shapes.
 */
export class NeoCom {
  public jsonClass = 'NeoCom';
  protected expanded = false;
  protected selected = false;
  protected visible = true;
  protected children: NeoCom[] = [];

  constructor(values: object = {}) {
    Object.assign(this, values);
  }

  getJsonClass(): string {
    return this.jsonClass;
  }

  isActive(): boolean {
    return true;
  }

  isVisible(): boolean {
    return this.visible;
  }

  setVisible(value: boolean): void {
    this.visible = value;
  }

  getChildren(): NeoCom[] {
    return this.children;
  }

  addChild(child: NeoCom): void {
    this.children.push(child);
  }

  collaborate2View(_variant?: string): NeoCom[] {
    if (!this.isVisible()) {
      return [];
    }
    const list: NeoCom[] = [this];
    if (this.isExpanded()) {
      for (const child of this.children) {
        list.push(...child.collaborate2View(_variant));
      }
    }
    return list;
  }

  isExpandable(): boolean {
    return this.children.length > 0;
  }

  isExpanded(): boolean {
    return this.expanded;
  }

  collapse(): boolean {
    this.expanded = false;
    return this.expanded;
  }

  expand(): boolean {
    this.expanded = true;
    return this.expanded;
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  toggleSelected(): boolean {
    this.selected = !this.selected;
    return this.selected;
  }

  isSelected(): boolean {
    return this.selected;
  }

  select(): void {
    this.selected = true;
  }

  unselect(): void {
    this.selected = false;
  }
}
