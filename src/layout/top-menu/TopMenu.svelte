<script>
	import DrawerIcon from "./drawer-icon/DrawerIcon.svelte";
	import FullScreenIcon from "./full-screen-icon/FullScreenIcon.svelte";
	import ProfileButton from "./profile-menu/ProfileButton.svelte";
</script>

<div class="bg-white h-14 flex items-center p-1">
	<DrawerIcon />
	<div class="flex-grow"></div>
	<div class="flex-shrink flex gap-2">
		<!-- <NotificationIcon /> -->
		<FullScreenIcon />
		<ProfileButton />
	</div>
</div>
