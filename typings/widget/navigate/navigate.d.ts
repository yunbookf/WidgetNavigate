interface WidgetNavigateOptions {
    icon?: boolean;
    position?: WidgetNavigatePosition;
    height?: number;
    width?: string;
}

interface WidgetNavigateMenuItem {
    url?: string;
    text: string;
    onClick?(): void;
}

interface WidgetNavigateItem {
    url?: string;
    text: string;
    menu?: WidgetNavigateMenuItem[];
    onClick?(): void;
}

type WidgetNavigatePosition = "absolute" | "fixed" | "static";

interface WidgetNavigateInstance {
    dom: JQuery;
    icon: boolean;
    iconUrl: string;
    position: WidgetNavigatePosition;
    height: number;
    width: string;
    selected: number;
    menuOffsetTop: number;

    addItem(o: WidgetNavigateItem): void;
}

interface WidgetNavigateConstructor {
    new(d: any, opts?: WidgetNavigateOptions): WidgetNavigateInstance;

    version: string;
}

// declare let WidgetNavigate: WidgetNavigateConstructor;

