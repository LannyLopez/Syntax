var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';

var Chat = function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    _this.handleSendMessage = function (event) {
      event.preventDefault();
      var message = _this.state.message;

      _this.props.onSubmit(message);
      _this.setState({ message: '' });
    };

    _this.scrollToBottom = function () {
      var chat = document.getElementById('end-of-chat');
      chat.scrollIntoView();
    };

    _this.state = {
      message: ''
    };
    return _this;
  }

  _createClass(Chat, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.message !== this.state.message && this.props.typingListener) {
        this.props.typingListener();
      }
      this.scrollToBottom();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          messages = _props.messages,
          isLoading = _props.isLoading,
          user = _props.user,
          renderMessage = _props.renderMessage;
      var message = this.state.message;


      return React.createElement(
        'div',
        { className: 'chat-box' },
        React.createElement(
          'div',
          { className: 'msg-page' },
          React.createElement(MessageList, {
            isLoading: isLoading,
            messages: messages,
            user: user,
            renderMessage: renderMessage
          }),
          React.createElement(
            'div',
            { className: 'chat-box-bottom' },
            this.props.typingIndicator ? this.props.typingIndicator : '',
            React.createElement('div', { id: 'end-of-chat' })
          )
        ),
        React.createElement(
          'div',
          { className: 'msg-footer' },
          React.createElement(
            'form',
            {
              className: 'message-form',
              onSubmit: this.handleSendMessage },
            React.createElement(
              'div',
              { className: 'input-group' },
              React.createElement('input', {
                type: 'text',
                className: 'form-control message-input',
                placeholder: 'Type something',
                value: message,
                onChange: function onChange(event) {
                  return _this2.setState({ message: event.target.value });
                },
                required: true
              })
            )
          )
        )
      );
    }
  }]);

  return Chat;
}(React.Component);

Chat.propTypes = {
  messages: PropTypes.array,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  renderMessage: PropTypes.func,
  typingListener: PropTypes.func,
  typingIndicator: PropTypes.element
};

Chat.defaultProps = {
  messages: [],
  user: {
    "uid": "user1"
  },
  isLoading: false,
  onSubmit: function onSubmit(message) {
    return console.log(message);
  }
};

export default Chat;