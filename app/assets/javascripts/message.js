$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat-main__message__group">
          <div class="chat-main__message__group__list">
            <div class="chat-main__message__group__list__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message__group__list__date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message__group__text-box">
            <p class="text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="chat-main__message__group">
        <div class="chat-main__message__group__list">
          <div class="chat-main__message__group__list__name">
            ${message.user_name}
          </div>
          <div class="chat-main__message__group__list__date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message__group__text-box">
          <p class="text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message').append(html);      
      $('Form')[0].reset();
      $('.Form__submit').prop('disabled', false);
      $('.chat-main__message').animate({ scrollTop: $('.chat-main__message')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});