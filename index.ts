// index.ts
export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export function Button(props: ButtonProps): HTMLButtonElement {
    const { label, onClick } = props;

    const buttonElement = document.createElement('button');
    buttonElement.innerText = label;
    buttonElement.addEventListener('click', onClick);

    return buttonElement;
}

export function mount(component: HTMLElement, containerId: string): void {
    const container = document.getElementById(containerId);
    container.appendChild(component);
}
