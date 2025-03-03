import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {Menu} from "../../components/menu/Menu"
import { useModal } from "../../components/modals/ModalContext";

vi.mock("../../components/modals/ModalContext", () => ({
    useModal: vi.fn()
}))

describe("Menu", () => {
    it("should render the menu with the buttons", () => {

        const mockOpenModal = vi.fn();

        useModal.mockReturnValue({
            openModal: mockOpenModal
        })

        render(<Menu />)

        const grabacionesButton = screen.getByText("GRABACIONES")
        const jugarButton = screen.getByText("JUGAR")
        expect(grabacionesButton).toBeInTheDocument()
        expect(jugarButton).toBeInTheDocument()
    })
})