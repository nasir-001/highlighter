import { mount } from "@vue/test-utils";
import HighlighterPage from "../src/pages/HighlighterPage";

describe("HighlighterPage", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(HighlighterPage, {attachTo: document.body});
    });
    afterEach(() => wrapper.mount());

    describe("renders correct elements", () => {
        it('should have a "source-text" textarea', () => {
            const sourceText = wrapper.find('[data-testid="source-text"]');
            expect(sourceText.exists()).toBe(true);
            expect(wrapper.findAll('[data-testid="source-text"]')).toHaveLength(1)
        })
    })
})