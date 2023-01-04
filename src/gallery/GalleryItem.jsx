import React from 'react';
import Picture from './Picture';

const dataLiteboxGroup = "gallery";
const dataLiteboxText = "";

class GalleryItem extends React.Component {

	render() {
		return (
			<div className="b-gal-item wnd-orientation-landscape">

				<a className="b-gal-a litebox" data-litebox-group={dataLiteboxGroup} data-litebox-text={dataLiteboxText} href={this.props.large} width={this.props.width} height={this.props.height}>
					<Picture
						type = {this.props.type}
						small = {this.props.small}
						medium = {this.props.medium}
						large = {this.props.large}
						alt = {this.props.alt}
						width ={this.props.width}
						height = {this.props.height}
                        sizes = {this.props.sizes}
					/>
				</a>

				<div className="b-gal-t">
					<span>
						<span>{this.props.alt}</span>
					</span>
				</div>
			</div>
		)
	}
}

export default GalleryItem;