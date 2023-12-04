namespace xenopackage {
    export interface ButtonProps {
        label: string;
        onClick: () => void;
    }

    export function Button(props: ButtonProps): HTMLButtonElement {
        const { label, onClick } = props;

        const buttonElement = document.createElement('button');
        buttonElement.innerText = label;
        buttonElement.classList.add('my-button'); // Apply the style class
        buttonElement.addEventListener('click', onClick);

        return buttonElement;
    }

    export function mount(component: HTMLElement, containerId: string): void {
        const container = document.getElementById(containerId);

        if (container) {
            container.appendChild(component);
        } else {
            console.error(`Container with id '${containerId}' not found.`);
        }
    }
}
