import React from 'react';
import Typed from 'typed.js';


class TypedText extends React.Component {
    componentDidMount() {
      const { strings } = this.props;
      
      const options = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 50,
        onComplete: () => {
          this.typed.reset();
        }
      };
      
      this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
      this.typed.destroy();
    }

  
    render() {
      return (
        <div className="wrap">
          <div className="type-wrap">
          <span>{this.props.text}</span>
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
  }

  export default TypedText;