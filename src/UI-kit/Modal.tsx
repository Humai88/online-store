import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";
import React, { Component } from "react";
import styles from "./Modal.module.scss";

class Backdrop extends Component<ModalPropsType> {
  render() {
    return <div className={styles.backdrop} onClick={this.props.onClose} />;
  }
}

export class ModalOverlay extends Component<DefaultDivPropsType> {
  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

export class Modal extends Component<ModalPropsType> {
  render() {
    return (
      <Fragment>
        <Backdrop onClose={this.props.onClose} />
        <ModalOverlay>{this.props.children}</ModalOverlay>
      </Fragment>
    );
  }
}

// Types
type DefaultDivPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLInputElement
>;
type ModalPropsType = DefaultDivPropsType & { onClose?: () => void };
