/**
 * @param {{bsIconClass: string, name: string, value: number}|{bsIconClass: string, name: string, value: number, primary: boolean}} item
 */
function createExpertise(item) {
    return `<div class="mb-3 p-3 bg-white rounded-3 shadow-sm">
          <div class="row align-items-center">
            <div class="col-5 col-sm-4 col-lg-5 col-xl-4">
              <div class="d-flex align-items-center">
                <i class="${item.bsIconClass} fa-2x me-2 text-primary"></i>
                <p class="fw-bold m-0 text-uppercase">${item.name}</p>
              </div>
            </div>
            <div class="col">
              <div class="progress" data-bs-toggle="tooltip" title="${item.value}%">
                <div class="progress-bar" style="width: ${item.value}%" role="progressbar" aria-valuenow="${item.value}" aria-valuemin="0"
                     aria-valuemax="100">
                </div>
              </div>
            </div>
          </div>
        </div>`;
}

/**
 * @param {string} id
 * @param {[{bsIconClass: string, name: string, value: number},{bsIconClass: string, name: string, value: number},{bsIconClass: string, name: string, value: number, primary: boolean},{bsIconClass: string, name: string, value: number, primary: boolean},{bsIconClass: string, name: string, value: number, primary: boolean},null,null,null]} items
 */
function createSeeMoreExpertise(id, items) {
    let body = "";
    items.forEach(item => {
        body += `<div class="col-12 col-md-6 col-lg-4">${createExpertise(item)}</div>`;
    })

    return `<div class="mb-3 p-3 text-center rounded-3 ">
<button class="btn btn-outline-primary fw-bold" data-bs-toggle="offcanvas" data-bs-target="${id}">Voir Plus . . .</button>
</div>
<div class="offcanvas offcanvas-bottom h-100" tabindex="-1" id="${id.substring(1)}">
<div class="container"><div class="offcanvas-header"><div class="offcanvas-title h1">Mon Expertise</div>
<button aria-label="Close" class="btn-close text-dark" data-bs-dismiss="offcanvas" data-bs-target="${id}" type="button"></button></div></div>
<div class="offcanvas-body"><div class="container"><div class="row">${body}</div></div></div></div>`;
}