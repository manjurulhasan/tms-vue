<template lang="">
    <aside class="sidebar" id="sidebarID">
            <div class="logo">
                <button type="button" class="close_btn" onclick="menuClose()">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.4705 11.9339C5.33917 8.23067 8.23068 5.33916 11.9339 4.4705C14.6083 3.84317 17.3917 3.84317 20.0661 4.4705C23.7693 5.33916 26.6608 8.23068 27.5295 11.9339C28.1568 14.6083 28.1568 17.3917 27.5295 20.0661C26.6608 23.7693 23.7693 26.6608 20.0661 27.5295C17.3917 28.1568 14.6083 28.1568 11.9339 27.5295C8.23068 26.6608 5.33917 23.7693 4.4705 20.0661C3.84317 17.3917 3.84317 14.6083 4.4705 11.9339Z" stroke="#0A1436" stroke-width="1.5"/>
                        <path d="M18.3571 13.6429L13.6431 18.357M18.3571 18.357L13.6431 13.6429" stroke="#0A1436" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                </button>
                <a href="#">
                    <!-- <img src="../../assets/images/Simplix Logo.png" alt="logo"> -->
                    <h5>SCSS</h5>
                    <h5 class="text-success">Tenant Management System</h5>
                </a>
            </div>
            <div class="menu">
                <ul class="list-unstyled ps-0">
                    <li class="active">
                        <RouterLink to="/dashboard">
                            <font-awesome-icon icon="fa-solid fa-gauge-high" /> Dashboard
                        </RouterLink>
                    </li>
                    <li class="sub-menu btn-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        <font-awesome-icon icon="fa-solid fa-users" />
                        <button class=" align-items-center rounded border-0"> 
                            Tenants
                        </button>
                        <div class="collapse" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <RouterLink to="/tenants" class="link-body-emphasis d-inline-flex text-decoration-none rounded"> <font-awesome-icon icon="fa-solid fa-users-viewfinder" /> Manage Tenants</RouterLink>
                                </li>
                                <li>
                                    <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded"><font-awesome-icon icon="fa-solid fa-file-invoice" /> Manage Bills</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <RouterLink to="/managers">
                            <font-awesome-icon icon="fa-solid fa-user" /> Managers
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login">
                            <font-awesome-icon icon="fa-solid fa-file-lines" /> Bill Management
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/transactions">
                            <font-awesome-icon icon="fa-solid fa-money-bill-transfer" /> Transactions 
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/reports">
                            <font-awesome-icon icon="fa-solid fa-file-contract" /> Reports 
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/documents">
                            <font-awesome-icon icon="fa-solid fa-folder-open" /> Documents 
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tasks">
                            <font-awesome-icon icon="fa-solid fa-list-check" />Tasks 
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/settings">
                            <font-awesome-icon icon="fa-solid fa-gears" /> Settings 
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/support">
                            <font-awesome-icon icon="fa-solid fa-headset" /> Support 
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                © SCSS 2023
            </div>
    </aside>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>