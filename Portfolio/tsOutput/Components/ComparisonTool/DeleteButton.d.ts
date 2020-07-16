import * as React from 'react';
export interface DeleteButtonProps {
    Id: number;
    DeleteCallback: (id: number) => void;
}
export declare class DeleteButton extends React.Component<DeleteButtonProps> {
    constructor(props: DeleteButtonProps);
    private handleClick;
    render(): JSX.Element;
}
