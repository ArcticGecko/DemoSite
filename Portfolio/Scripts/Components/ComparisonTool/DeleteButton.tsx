import * as React from 'react';

export interface DeleteButtonProps {
    Id: number;
    DeleteCallback: (id: number) => void;
}

export class DeleteButton extends React.Component<DeleteButtonProps> {

    constructor(props: DeleteButtonProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    private handleClick() :void {
        this.props.DeleteCallback(this.props.Id);
    }

    render() {

        return (
            <div className="delete-button" onClick={this.handleClick}>
                X
            </div>
        );
    }

}