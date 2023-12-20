<script lang="ts">
	import Icon from "@iconify/svelte";
	import { Editor } from "@tiptap/core";
	import Highlight from "@tiptap/extension-highlight";
	import TextAlign from "@tiptap/extension-text-align";
	import StarterKit from "@tiptap/starter-kit";
	import { atom } from "nanostores";
	import { onDestroy, onMount } from "svelte";
	let element: Element;
	let editor: Editor;
	let component: HTMLDivElement;
	const isFocused = atom(false);

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Highlight,
				TextAlign.configure({
					types: ["heading", "paragraph"]
				})
			],
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onFocus: () => {
				isFocused.set(true);
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});

	function handleRemoveFocus(e: any) {
		if (component.contains(e.target)) {
			return;
		}
		isFocused.set(false);
	}

	onMount(() => {
		document?.addEventListener("click", handleRemoveFocus);

		return () => {
			document.removeEventListener("click", handleRemoveFocus);
		};
	});
</script>

<div
	bind:this={component}
	class="bg-white outline rounded w-full {$isFocused
		? 'outline-2 outline-blue-500'
		: 'outline-1 outline-gray-300'}"
>
	{#if editor}
		<div class="editor border-b p-2 flex flex-wrap gap-1.5">
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				class:active={editor.isActive("heading", { level: 2 })}
			>
				H2
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				class:active={editor.isActive("heading", { level: 3 })}
			>
				H3
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				class:active={editor.isActive("heading", { level: 4 })}
			>
				H4
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().setParagraph().run()}
				class:active={editor.isActive("paragraph")}
			>
				P
			</button>
			<div class="separator" />
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				class="font-bold"
				class:active={editor.isActive("bold")}
			>
				B
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				class:active={editor.isActive("italic")}
			>
				<Icon icon="ic:round-format-italic" class="text-sm" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				class:active={editor.isActive("strike")}
			>
				<Icon icon="ic:round-format-strikethrough" class="text-sm" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleHighlight().run()}
				disabled={!editor.can().chain().focus().toggleHighlight().run()}
				class:active={editor.isActive("highlight")}
			>
				<Icon
					icon="material-symbols-light:format-ink-highlighter-outline-rounded"
					class="text-sm"
				/>
			</button>

			<div class="separator" />
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleBulletList().run()}
				disabled={!editor.can().chain().focus().toggleBulletList().run()}
				class:active={editor.isActive("bulletList")}
			>
				<Icon icon="ic:sharp-format-list-bulleted" class="text-base" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleOrderedList().run()}
				disabled={!editor.can().chain().focus().toggleOrderedList().run()}
				class:active={editor.isActive("orderedList")}
			>
				<Icon icon="ic:sharp-format-list-numbered" class="text-base" />
			</button>
			<div class="separator" />
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().setTextAlign("left").run()}
				disabled={!editor.can().chain().focus().setTextAlign("left").run()}
				class:active={editor.isActive({ textAlign: "left" })}
			>
				<Icon icon="ic:round-format-align-left" class="text-base" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().setTextAlign("center").run()}
				disabled={!editor.can().chain().focus().setTextAlign("center").run()}
				class:active={editor.isActive({ textAlign: "center" })}
			>
				<Icon icon="ic:round-format-align-center" class="text-base" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().setTextAlign("right").run()}
				disabled={!editor.can().chain().focus().setTextAlign("right").run()}
				class:active={editor.isActive({ textAlign: "right" })}
			>
				<Icon icon="ic:round-format-align-right" class="text-base" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().setTextAlign("justify").run()}
				disabled={!editor.can().chain().focus().setTextAlign("justify").run()}
				class:active={editor.isActive({ textAlign: "justify" })}
			>
				<Icon icon="ic:round-format-align-justify" class="text-base" />
			</button>
			<div class="separator" />
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleCode().run()}
				disabled={!editor.can().chain().focus().toggleCode().run()}
				class:active={editor.isActive("code")}
			>
				code
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleCodeBlock().run()}
				disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
				class:active={editor.isActive("codeBlock")}
			>
				code block
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().toggleBlockquote().run()}
				disabled={!editor.can().chain().focus().toggleBlockquote().run()}
				class:active={editor.isActive("blockquote")}
			>
				quote
			</button>
			<div class="separator" />
			<button tabindex="-1" on:click={() => editor.chain().focus().setHardBreak().run()}>
				<Icon icon="ic:round-keyboard-return" class="text-sm" />
			</button>
			<button tabindex="-1" on:click={() => editor.chain().focus().setHorizontalRule().run()}>
				<Icon icon="ic:round-horizontal-rule" class="text-sm" />
			</button>
			<div class="separator" />

			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
			>
				<Icon icon="ic:baseline-undo" class="text-sm" />
			</button>
			<button
				tabindex="-1"
				on:click={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
			>
				<Icon icon="ic:baseline-redo" class="text-sm" />
			</button>
		</div>
	{/if}
	<div
		role="none"
		bind:this={element}
		class="p-2 block min-w-full border-none"
		on:keydown={(e) => {
			if (e.key === "Tab") {
				e.preventDefault();
			}
		}}
	/>
</div>

<style lang="postcss">
	.editor {
		button {
			@apply text-black px-1.5 py-1 text-xs border border-gray-300 rounded;
			min-width: 1.6rem;

			:not(.active):not(:disabled) {
				@apply hover:bg-gray-100;
			}

			.active {
				@apply bg-black text-white;
			}

			:disabled {
				@apply text-gray-400 border-gray-200;
			}
		}
	}

	.separator {
		@apply w-2;
	}
</style>
