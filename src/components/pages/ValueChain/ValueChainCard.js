import React from "react";

function ValueChainCard(props) {
  return (
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">
        <div id="introDiv"
                  dangerouslySetInnerHTML={{
                    __html: `${props.intro}`,
                  }}
                />
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ValueChainCard;
