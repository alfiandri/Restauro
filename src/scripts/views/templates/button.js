const CreateLikeButtonInitiator = () => `
  <button aria-label="Like This Restaurant" id="likeButton" class="btn-like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const CreateUnlikeButtonInitiator = () => `
  <button aria-label="Unlike This Restaurant" id="likeButton" class="btn-like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { CreateLikeButtonInitiator, CreateUnlikeButtonInitiator };
