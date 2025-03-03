import { describe, expect, it, vi } from "vitest";
import { useModal } from "../../components/modals/ModalContext";
import { fireEvent, render, screen } from "@testing-library/react";
import MenuButton from "../../components/menu/menu-button/MenuButton";


vi.mock("../../components/modals/ModalContext", () => ({
    useModal: vi.fn()
}))

describe("MenuButton", () => {

    it.each([
        ["GRABACIONES", "openRecordings"],
        ["JUGAR", "openLevel"]
    ])("should have the correct text (%s) when render and execute action when %s is clicked", (text, action) => {

        const mockOpenModal = vi.fn();

        useModal.mockReturnValue({
            openModal: mockOpenModal
        })

        render(<MenuButton action={action} text={text} />)
    
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument()

        fireEvent.click(button)

        expect(mockOpenModal).toHaveBeenCalledTimes(1)
        expect(mockOpenModal).toHaveBeenCalledWith(action)
    })
})