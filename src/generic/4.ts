/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentType {
  title: string;
}

class Component<T extends ComponentType> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentType> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
